import { Box, Typography } from '@material-ui/core';
import * as fullfacetsApi from '../../../api/fullfacets';
import { Autocomplete } from '../../../components/Autocomplete';

const fetchKeywords = (params) => ({ loadedOptions = [] }) => {
    console.log(loadedOptions)
  return fullfacetsApi.getFullfacets({
    params: {
      facets: "keywords",
    //   page: page + 1,

      ...params
    }
  }).then((data) => {
    return {
    //   hasMore: pagination.page < pagination.last_page && pagination.total > 0,
      options: loadedOptions.concat(data[0].keywords),
    //   additionalData: {
    //     page: pagination.page
    //   }
    };
  });
};

const renderOption = (option) => {
  return (
    <Box clone width="100%" overflow="hidden">
      <Typography>{option?._id}</Typography>
    </Box>
  );
};

export const KeywordsAutocomplete = ({ params = {}, creatablePayload, ...props }) => {
  return (
    <Autocomplete
      isAsync
      label="Keywords"
      placeholder="Search and add keywords..."
      onNeedFetch={fetchKeywords(params)}
      renderOption={renderOption}
      getOptionLabel={((option) => option && option?._id)}
      getOptionValue={(option) => option?._id}
      getOptionSelected={(option, value) => option?._id === value?._id}

      {...props}
    />
  );
};
