<template>
  <v-container style="max-width: 100%;" pa-0>
    <v-layout row wrap>
      <v-flex xs12>
        <v-flex ml-5>
          <div class="headline">Hi Danny welcome to your learning plan</div>
        </v-flex>
        <v-item-group>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 md4>
                <v-subheader>Start Course</v-subheader>
                <v-item>
                  <v-hover>
                    <v-card
                      slot-scope="{ hover }"
                      class="mx-auto"
                      color="grey lighten-4"
                      height="200"
                    >
                      <v-img
                        :aspect-ratio="16/9"
                        src="https://png.pngtree.com/element_origin_min_pic/16/10/20/205808b400cd56e.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                            <v-flex xs12 sm3 text-xs-center>
                              <v-btn fab dark large color="black">
                                <v-icon dark>play_arrow</v-icon>
                              </v-btn>
                            </v-flex>
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-item>
              </v-flex>
              <v-flex xs12 md4>
                <v-subheader>Resources</v-subheader>
                <v-item>
                  <v-layout row>
                    <v-flex xs12>
                      <v-card flat>
                        <v-list>
                          <v-list-tile v-for="item in resources" :key="item.title" avatar @click>
                            <v-list-tile-action>
                              <v-icon color="primary">book</v-icon>
                            </v-list-tile-action>

                            <v-list-tile-content>
                              <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                              <v-flex xs12 sm3>
                                <v-btn flat icon color="black">
                                  <v-icon>get_app</v-icon>
                                </v-btn>
                              </v-flex>
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-item>
              </v-flex>
              <v-flex xs12 md4>
                <v-subheader>Progress</v-subheader>
                <v-item>
                  <!-- <v-card
                slot-scope="{ active, toggle }"
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                light
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div v-if="active" class="display-3 text-xs-center">Active</div>
                </v-scroll-y-transition>
                  </v-card>-->
                  <v-layout row>
                    <v-flex xs12>
                      <v-card flat>
                        <v-list>
                          <v-list-tile
                            v-for="item in items2"
                            :key="item.title"
                            avatar
                            @click
                            elevation-11
                          >
                            <v-list-tile-action>
                              <h2>0</h2>
                            </v-list-tile-action>

                            <v-list-tile-content>
                              <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                              <v-icon v-if="item.icon" color="primary">{{ item.icond }}</v-icon>
                            </v-list-tile-action>
                          </v-list-tile>
                        </v-list>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-item>
              </v-flex>
            </v-layout>
          </v-container>
        </v-item-group>
        <v-flex>
          <div>
            <v-flex ml-5 mr-5>
              <v-tabs
                v-model="tab"
                color="primary"
                dark
                next-icon="keyboard_arrow_right"
                prev-icon="keyboard_arrow_left"
                show-arrows
              >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
                <v-tab>
                  <v-icon small color="white">star</v-icon>Bookmarks
                </v-tab>
              </v-tabs>
            </v-flex>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item">
                <v-layout row wrap>
                  <v-flex>
                    <v-toolbar color="primary" dark>
                      <v-toolbar-title>
                        <div class="text-xs-center">
                          <v-chip color="primary darken-1" text-color="white">
                            <v-avatar>
                              <v-icon>account_circle</v-icon>
                            </v-avatar>todo (0)
                          </v-chip>

                          <v-chip color="primary darken-1" text-color="white">
                            <v-avatar>
                              <v-icon>check_circle</v-icon>
                            </v-avatar>Completed (0)
                          </v-chip>

                          <v-chip color="primary darken-1" text-color="white">
                            <v-avatar>
                              <v-icon>check_circle</v-icon>
                            </v-avatar>All (2)
                          </v-chip>
                        </div>
                      </v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items class="hidden-sm-and-down">
                        <v-btn flat>Configure Program</v-btn>
                      </v-toolbar-items>
                    </v-toolbar>
                  </v-flex>
                </v-layout>

                <v-card flat>
                  <v-card-text>
                    <v-item-group>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 md4>
                            <v-item>
                              <v-card light height="200">
                                <v-layout>
                                  <v-flex xs5>
                                    <!-- <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                height="125px"
                                contain
                                    ></v-img>-->

                                    <v-hover>
                                      <v-card
                                        flat
                                        light
                                        slot-scope="{ hover }"
                                        class="mx-auto"
                                        color="grey lighten-4"
                                        style="height: 100%;"
                                      >
                                        <v-img
                                          :aspect-ratio="16/9"
                                          src="https://reasonablegraph.org/sites/reasonablegraph.org/files/rglogo.png"
                                          style="height: 100%; width: 100%;"
                                        >
                                          <v-expand-transition>
                                            <div
                                              v-if="hover"
                                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                              style="height: 100%;"
                                            >
                                              <v-flex xs12 text-xs-center>
                                                <v-btn fab dark small color="black">
                                                  <v-icon dark>play_arrow</v-icon>
                                                </v-btn>
                                              </v-flex>
                                            </div>
                                          </v-expand-transition>
                                        </v-img>
                                      </v-card>
                                    </v-hover>
                                  </v-flex>
                                  <v-flex xs7>
                                    <v-card-title primary-title>
                                      <div>
                                        <!-- <div class="headline"><small>INTRODUCTION TO FINANCIAL STATEMENTS</small></div> -->
                                        <router-link to>
                                          <div
                                            class="text-capitalize"
                                          >INTRODUCTION TO FINANCIAL STATEMENT</div>
                                          <div>13 lessons, 4 exercises, 1 exam</div>
                                        </router-link>
                                      </div>
                                    </v-card-title>
                                  </v-flex>
                                </v-layout>
                                <v-divider light></v-divider>
                                <v-card-actions class="pa-3">
                                  <v-spacer></v-spacer>SKILL CHECK
                                  <v-btn flat icon color="primary">
                                    <v-icon>bar_chart</v-icon>
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-item>
                          </v-flex>
                          <v-flex xs12 md4>
                            <v-item>
                              <v-card light height="200">
                                <v-layout>
                                  <v-flex xs5>
                                    <!-- <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                height="125px"
                                contain
                                    ></v-img>-->

                                    <v-hover>
                                      <v-card
                                        flat
                                        light
                                        slot-scope="{ hover }"
                                        class="mx-auto"
                                        color="grey lighten-4"
                                        style="height: 100%;"
                                      >
                                        <v-img
                                          :aspect-ratio="16/9"
                                          src="https://reasonablegraph.org/sites/reasonablegraph.org/files/rglogo.png"
                                          style="height: 100%; width: 100%;"
                                        >
                                          <v-expand-transition>
                                            <div
                                              v-if="hover"
                                              class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                              style="height: 100%;"
                                            >
                                              <v-flex xs12 text-xs-center>
                                                <v-btn fab dark small color="black">
                                                  <v-icon dark>play_arrow</v-icon>
                                                </v-btn>
                                              </v-flex>
                                            </div>
                                          </v-expand-transition>
                                        </v-img>
                                      </v-card>
                                    </v-hover>
                                  </v-flex>
                                  <v-flex xs7>
                                    <v-card-title primary-title>
                                      <div>
                                        <!-- <div class="headline"><small>INTRODUCTION TO FINANCIAL STATEMENTS</small></div> -->
                                        <router-link to>
                                          <div
                                            class="text-capitalize"
                                          >INTRODUCTION TO FINANCIAL STATEMENTsss</div>
                                          <div>13 lessons, 4 exercises, 1 exam</div>
                                        </router-link>
                                      </div>
                                    </v-card-title>
                                  </v-flex>
                                </v-layout>
                                <v-divider light></v-divider>
                                <v-card-actions class="pa-3">
                                  <v-spacer></v-spacer>SKILL CHECK
                                  <v-btn flat icon color="primary">
                                    <v-icon>bar_chart</v-icon>
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-item>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-item-group>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["Excel", "Finacial Modelling", "videos", "images", "news"],
      todos: [],
      completed: [],
      all: [],
      items2: [
        {
          icon: true,
          title: "Lesson Viewings",
          icond: "local_library"
        },
        {
          icon: true,
          title: "Courses Completed",
          icond: "done_all"
        },
        {
          icon: true,
          title: "Certificates Awarded",
          icond: "brightness_low"
        }
      ],
      resources: [
        {
          title: " Excel Skills Checklist"
        },
        {
          title: "Excel Schortcuts"
        },
        {
          title: "Cheat Sheet"
        }
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
