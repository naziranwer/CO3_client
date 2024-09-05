// hooks/useUser.ts
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_COINS, TAP_COIN_MUTATION } from "../graphql/operation";

export const useGetUserCoins = (email: string) => {
  return useQuery<{ getUser: { coins: number } }>(GET_USER_COINS, {
    variables: { email },
    skip: !email, // Skip the query if email is not provided
  });
};

export const useTapCoin = () => {
  return useMutation<{ tapCoin: string }>(TAP_COIN_MUTATION);
};
