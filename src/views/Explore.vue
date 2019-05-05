<template>
  <v-container>
    <h3 class="primary--text">Library</h3>
    <div class="text-xs-center">
      <v-chip color="primary" text-color="white">All</v-chip>

      <v-chip color="secondary" text-color="white">Excel</v-chip>

      <v-chip color="red" text-color="white">Powerpoint</v-chip>

      <v-chip color="green" text-color="white">Literacy</v-chip>
    </div>
    <v-item-group>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex v-for="n in 6" :key="n" xs12 md4>
            <v-item>
              <v-hover>
                <v-card
                  max-width="500"
                  class="mx-auto"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 8 : 2}`"
                >
                  <v-toolbar color="teal" dark>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>
                      <v-icon>book</v-icon>Topic
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn depressed color="teal">
                      3 Courses
                      <v-icon>list</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-title>
                    <h3 class="primary--text">Excel Essentials</h3>
                  </v-card-title>
                  <v-card-text>Learn the core functionality needed to become proficient in Excel, from cell navigation and selection to writing formulas and sorting data.</v-card-text>
                  <v-card-actions>49 lessons 12 exercises 4 exams</v-card-actions>
                </v-card>
              </v-hover>
            </v-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
    <h3 class="primary--text">Latest Courses</h3>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12 md6 lg6 xl6>
          <v-card class="mx-auto">
            <v-layout py-3 pl-3>
              <v-flex shrink>
                <v-img
                  height="200"
                  width="200"
                  src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                ></v-img>
              </v-flex>
              <v-flex text-xs-center>
                <v-container grid-list-lg pa-10>
                  <v-layout column>
                    <v-flex>
                     <router-link to="">Practical Applications of DAX</router-link>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <br>
         <v-flex xs12 md6 lg6 xl6>
          <v-card class="mx-auto">
            <v-layout py-3 pl-3>
              <v-flex shrink>
                <v-img
                  height="200"
                  width="200"
                  src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                ></v-img>
              </v-flex>
              <v-flex text-xs-center>
                <v-container grid-list-lg pa-10>
                  <v-layout column>
                    <v-flex>
                      <router-link to="">Practical Applications of DAX</router-link>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
