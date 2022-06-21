import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-ap-southeast-2.graphcms.com/v2/cl4od3m6m1u1301xmcf2z9enn/master',
    cache: new InMemoryCache(),
})