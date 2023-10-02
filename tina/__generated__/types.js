export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const DocsPartsFragmentDoc = gql`
    fragment DocsParts on Docs {
  title
  body
}
    `;
export const DocsDocument = gql`
    query docs($relativePath: String!) {
  docs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DocsParts
  }
}
    ${DocsPartsFragmentDoc}`;
export const DocsConnectionDocument = gql`
    query docsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DocsFilter) {
  docsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DocsParts
      }
    }
  }
}
    ${DocsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    docs(variables, options) {
      return requester(DocsDocument, variables, options);
    },
    docsConnection(variables, options) {
      return requester(DocsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client, options) => {
  const requester = async (doc, vars, options2) => {
    let url = client.apiUrl;
    if (options2?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options2.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client, options) => {
  const requester = generateRequester(client, options);
  return getSdk(requester);
};
