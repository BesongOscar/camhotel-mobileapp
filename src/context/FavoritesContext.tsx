import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import React, { createContext, useContext, useReducer } from "react";

type FavoritesState = {
  favorites: string[];
};

type FavoritesAction =
  | { type: "TOGGLE_FAVORITE"; hotelId: string }
  | { type: "LOAD_FAVORITES"; payload: string[] };

const initialState: FavoritesState = {
  favorites: [],
};

function favoritesReducer(
  state: FavoritesState,
  action: FavoritesAction
): FavoritesState {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return state.favorites.includes(action.hotelId)
        ? { favorites: state.favorites.filter((id) => id !== action.hotelId) }
        : { favorites: [...state.favorites, action.hotelId] };

    case "LOAD_FAVORITES":
      return { ...state, favorites: action.payload };

    default:
      return state;
  }
}

const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
} | null>(null);

const FAVORITES_KEY = "FAVORITE_HOTELS";

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);

        if (storedFavorites) {
          dispatch({
            type: "LOAD_FAVORITES",
            payload: JSON.parse(storedFavorites),
          });
        }
      } catch (error) {
        console.log("Failed to load favorites", error);
      }
    };

    loadFavorites();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
}
