import { Box, Typography } from "@material-ui/core";
import * as fixedValueEntriesApi from "../../api/fixed-value-entries";
import { Autocomplete } from "../../components/Autocomplete";

const fetchFixedValueEntries =
  (params) =>
  ({ loadedOptions = [] }) => {
    return fixedValueEntriesApi
      .getFixedValueEntries({
        params: {
          //   page: page + 1,

          ...params,
        },
      })
      .then((data) => {
        return {
          //   hasMore: pagination.page < pagination.last_page && pagination.total > 0,
          options: loadedOptions.concat(data.entries),
          //   additionalData: {
          //     page: pagination.page
          //   }
        };
      });
  };

export const FixedValueEntriesAutocomplete = ({ keyName, params = {}, ...props }) => {
  return (
    <Autocomplete
      isAsync
      label={keyName}
      placeholder="Search entry..."
      onNeedFetch={fetchFixedValueEntries(params)}
      getOptionLabel={(option) => option && option[keyName]}
      getOptionValue={(option) => option?.[keyName] || null}
      getOptionSelected={(option, value) =>
        option[keyName] === value[keyName]
      }
      renderOption={(option) => {
        return (
          <Box clone width="100%" overflow="hidden">
            <Typography>{option[keyName]}</Typography>
          </Box>
        );
      }}
      {...props}
    />
  );
};
