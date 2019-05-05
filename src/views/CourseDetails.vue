<template>
  <v-container>
    <v-layout row wrap>
      <div class="headline">
        1. Getting to Know the User Interface
        <v-btn flat icon @click="toggleRating">
          <v-icon v-if="favorite" color="orange">star</v-icon>
          <v-icon v-else color="#f2f2f2">star</v-icon>
        </v-btn>
      </div>
    </v-layout>
    <v-layout justify-center align-center>
      <v-flex xs12>
        <vue-plyr>
          <video
            controls
            crossorigin
            playsinline
            poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
          >
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
              type="video/mp4"
              size="576"
            >
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
              type="video/mp4"
              size="720"
            >
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
              type="video/mp4"
              size="1080"
            >
            <track
              kind="captions"
              label="English"
              srclang="en"
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
              default
            >
            <track
              kind="captions"
              label="Français"
              srclang="fr"
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
            >
            <a
              href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
              download
            >Download</a>
          </video>
        </vue-plyr>
      </v-flex>
    </v-layout>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex lg4 md4 xs12>
          <v-card>
            <v-card-text class="px-0">
              <v-tabs fixed-tabs>
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab href="#tab-1">
                  <v-icon medium>list</v-icon>Contents
                </v-tab>
                <v-tab href="#tab-2">
                  <v-icon medium>book</v-icon>My Notes
                </v-tab>

                <v-tab-item value="tab-1">
                  <v-card flat>
                    <v-card-text>
                      <v-list>
                        <v-list-tile v-for="item in resources" :key="item.title" avatar @click>
                          <v-list-tile-action>
                            <v-icon color="primary">play_arrow</v-icon>
                          </v-list-tile-action>

                          <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                          </v-list-tile-content>

                          <v-list-tile-action>
                            <v-btn flat icon color="orange">
                              <v-icon>star</v-icon>
                            </v-btn>
                          </v-list-tile-action>
                        </v-list-tile>
                      </v-list>
                      <v-btn block depressed large color="primary" lighten-1 xs12>Take course exam</v-btn>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item value="tab-2">
                  <v-card flat>
                    <v-card-text>
                      <v-textarea outline name="input-7-4" value></v-textarea>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg8 md8 x12>
          <v-card>
            <v-card-text class="px-0">
              <v-tabs grow>
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab href="#tab-1">Overview</v-tab>
                <v-tab href="#tab-2">Lesson Notes</v-tab>

                <v-tab href="#tab-3">Transcript</v-tab>

                <v-tab-item value="tab-1">
                  <v-card flat>
                    <v-card-text>1</v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item value="tab-2">
                  <v-card flat>
                    <v-card-text>2</v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item value="tab-3">
                  <v-card flat>
                    <v-card-text>3</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      favorite: false,
      tab: null,
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
  },
  methods: {
    toggleRating() {
      this.favorite = true;
    }
  }
};
</script>
