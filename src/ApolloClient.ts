import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://co3-server-side.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
