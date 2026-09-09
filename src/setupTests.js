import "@testing-library/jest-dom";

// O react-router 7 precisa do TextEncoder, que o jsdom do Jest não traz.
// Sem estas linhas, todo teste que envolve rotas falha antes de começar.
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;
