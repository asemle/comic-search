<template>
  <div class="page">
    <search-character-form></search-character-form>
    <characters-list></characters-list>
  </div>
</template>

<script>
import SearchCharacterForm from 'components/SearchCharacterForm'
import CharactersList from 'components/CharactersList'
export default {
  components: {
    SearchCharacterForm,
    CharactersList
  }
}
</script>

<style>
 .page {
   height: 100vh;
   background-image: url("https://www.overclockers.ua/games/the-wolf-among-us/01-big-the-wolf-among-us.jpg");
   background-attachment: fixed;
  background-size: cover; 
  overflow: scroll;
 }
 /* .page {
   height: 100%;
   overflow: scroll;
 } */
</style>
