import behavesLikeALocationSource from "./location-source.contract";
import hardcodedLocationSource from "./hardcoded-location-source";

behavesLikeALocationSource(() => hardcodedLocationSource);
