import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/genreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "aside" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
