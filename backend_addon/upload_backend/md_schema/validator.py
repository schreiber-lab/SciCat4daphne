# -*- coding: utf-8 -*-

from cerberus import Validator

from .schema import metadata_schema  # , sample ,material


# ~ def validate_sample(document):
# ~ validator = Validator(sample)

# ~ if validator(document):
# ~ return validator.normalized(document)
# ~ else:
# ~ raise RuntimeError(str(validator.errors))


def _build_dataset_schema(schemas):
    ds_schema = dict()
    for s in schemas:
        name = s["schema_name"]
        sub_schema = dict()
        for keydict in s["keys"]:
            key_name = keydict.pop("key_name")

            # todo :scan-ref check ignored for now
            keydict.pop("scan_ref", None)

            # remove "changes_likely" keys for cerberous
            keydict.pop("changes_likely", None)

            unit = keydict.pop("unit", None)
            if unit is not None:
                keydict = {
                    "required": keydict["required"],
                    "schema": {
                        "unit": {"allowed": [unit], "required": True},
                        "value": {"schema": keydict},
                    },
                    "type": "dict",
                }

            sub_schema[key_name] = keydict

        ds_schema[name] = {"type": "dict", "required": False, "schema": sub_schema}

        if s.get("multiples_entries", False):
            ds_schema[name] = {
                "type": "list",
                "required": False,
                "schema": ds_schema[name],
            }

    return ds_schema


def validate_dataset(document, dyn_schema):

    ds_schema = _build_dataset_schema(dyn_schema)
    validator = Validator(ds_schema)

    if validator(document):
        return validator.normalized(document)
    else:
        raise RuntimeError(str(validator.errors))


def validate_md_schema(document):
    validator = Validator(metadata_schema)

    if validator(document):
        return validator.normalized(document)
    else:
        raise RuntimeError(str(validator.errors))


def _build_entry_schema(schema):

    validator_schema = dict()
    for key in schema["keys"]:

        # this is still very hacky and need refinement
        validator_schema[key["key_name"]] = {
            "required": key["required"],
            "type": key["type"],
        }
        validator_schema["schema_name"] = {"type": "string", "required": True}

    return validator_schema


def validate_fixed_entry(document, entry_schema):

    e_schema = _build_entry_schema(entry_schema)
    validator = Validator(e_schema)

    if validator(document):
        return validator.normalized(document)
    else:
        raise RuntimeError(str(validator.errors))
