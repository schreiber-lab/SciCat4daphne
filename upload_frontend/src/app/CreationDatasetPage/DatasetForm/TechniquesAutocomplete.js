import { Box, Typography } from '@material-ui/core';
import * as fullfacetsApi from '../../../api/fullfacets';
import { Autocomplete } from '../../../components/Autocomplete';

const fetchTechnique = (params) => ({ loadedOptions = [] }) => {
    console.log(loadedOptions)
  return fullfacetsApi.getFullfacets({
    params: {
      facets: "techniques",
    //   page: page + 1,

      ...params
    }
  }).then((data) => {
    return {
    //   hasMore: pagination.page < pagination.last_page && pagination.total > 0,
      options: loadedOptions.concat(data[0].techniques),
    //   additionalData: {
    //     page: pagination.page
    //   }
    };
  });
};

const renderOption = (option) => {
  return (
    <Box clone width="100%" overflow="hidden">
      <Typography>{option?._id?.name}</Typography>
    </Box>
  );
};

export const TechniquesAutocomplete = ({ params = {}, creatablePayload, ...props }) => {
  return (
    <Autocomplete
      isAsync
      label="Techniques"
      placeholder="Search technique..."
      onNeedFetch={fetchTechnique(params)}
      renderOption={renderOption}
      getOptionLabel={((option) => option && option?._id?.name)}
      getOptionValue={(option) => option?._id?.pid}
      getOptionSelected={(option, value) => option?._id?.pid === value?._id?.pid}

      {...props}
    />
  );
};
