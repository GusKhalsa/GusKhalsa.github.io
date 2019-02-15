<template>
  <div id="app">
    <div id="navigation">
      <h1>Gus Khalsa</h1>
      <nav class="dark-theme">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">PORTFOLIO</a></li>
          <li><img src="../src/assets/images/github-icon.png" alt="Github Icon" style="height: 40px;"></li>
        </ul>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  font-family: 'Raleway', sans-serif;
}

#navigation {
  background-color: black;
}

h1 {
  float: left;
}

nav {
  float: right;
}

ul {
  list-style: none;
}

li {
  display: inline;
  padding: 1.5em;
  font-size: 24px;
}

a {
  text-decoration: none;
}
</style>
