<template>
  <v-container grid-list-md text-xs-left>
    <v-flex pa-5>
      <h2 class="primary--text">Profile</h2>
    </v-flex>
    <v-card>
      <v-card-title primary-title></v-card-title>
      <v-layout row wrap>
        <v-flex xs12 sm4 lg4 xl4>
          <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
            <v-item>
              <div slot-scope="{ active, toggle }">
                <v-btn
                  flat
                  color="primary"
                  :input-value="active"
                  @click="toggle"
                >Personal Information</v-btn>
              </div>
            </v-item>
            <v-item>
              <div slot-scope="{ active, toggle }">
                <v-btn flat color="primary" :input-value="active" @click="toggle">Email Preferences</v-btn>
              </div>
            </v-item>
            <v-item>
              <div slot-scope="{ active, toggle }">
                <v-btn flat color="primary" :input-value="active" @click="toggle">Update Password</v-btn>
              </div>
            </v-item>
            <v-item>
              <div slot-scope="{ active, toggle }">
                <v-btn flat color="primary" :input-value="active" @click="toggle">Delete Account</v-btn>
              </div>
            </v-item>
          </v-item-group>
        </v-flex>

        <v-flex xs12 sm8 lg8 xl8>
          <v-window v-model="window" vertical>
            <v-window-item>
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar color="grey" class="mr-3"></v-avatar>
                    <strong class="title">Personal Information</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>account</v-icon>
                    </v-btn>
                  </v-layout>

                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field outline v-model="fname" label="First Name" required></v-text-field>

                    <v-text-field outline v-model="sname" label="Second Name" required></v-text-field>

                    <h2 class="red--text">NB: Todo: Avatar Uploading</h2>

                    <v-text-field
                      outline
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                    <p></p>
                    <v-spacer></v-spacer>
                    <v-btn depressed large color="primary" @click>Save</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item>
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar color="grey" class="mr-3"></v-avatar>
                    <strong class="title">Email Preferences</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>account</v-icon>
                    </v-btn>
                  </v-layout>

                  <v-flex pa-5>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <h4>Announcements</h4>

                      <p>Keep up to date with product and content announcements</p>

                      <v-checkbox
                        label="Content Updates"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                      ></v-checkbox>

                      <v-checkbox
                        label="Product Updates"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                      ></v-checkbox>

                      <h4>Unsubscribe</h4>

                      <p>Opt out of all emails from AFK</p>

                      <v-checkbox
                        label=" Unsubscribe from all emails"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                      ></v-checkbox>

                      <v-btn depressed large color="primary" @click>Update Preferences</v-btn>
                    </v-form>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item>
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar color="grey" class="mr-3"></v-avatar>
                    <strong class="title">Update Password</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>account</v-icon>
                    </v-btn>
                  </v-layout>

                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      outline
                      :append-icon="show2 ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show2 ? 'text' : 'password'"
                      name="input-10-2"
                      label="Current Password"
                      hint="At least 8 characters"
                      value
                      class="input-group--focused"
                      @click:append="show2 = !show2"
                    ></v-text-field>

                    <v-text-field
                      outline
                      :append-icon="show2 ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show2 ? 'text' : 'password'"
                      name="input-10-2"
                      label="New Password"
                      hint="At least 8 characters"
                      value
                      class="input-group--focused"
                      @click:append="show2 = !show2"
                    ></v-text-field>

                    <v-text-field
                      outline
                      :append-icon="show2 ? 'visibility' : 'visibility_off'"
                      :rules="[rules.required, rules.min]"
                      :type="show2 ? 'text' : 'password'"
                      name="input-10-2"
                      label="Repeat Password"
                      hint="At least 8 characters"
                      value
                      class="input-group--focused"
                      @click:append="show2 = !show2"
                    ></v-text-field>

                    <v-btn depressed large color="primary" @click>Update Password</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item>
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar color="grey" class="mr-3"></v-avatar>
                    <strong class="title">Delete Account</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>account</v-icon>
                    </v-btn>
                  </v-layout>

                  <v-form ref="form" v-model="valid" lazy-validation pa-3>
                    <p>
                      This action will permanently delete your user data and cannot be undone. Your user data includes your name, email address, password, activity history and any additional information you have added to our system.
                      This request will be verified by a ALF account manager. You will receive confirmation from the ALF account manager within 24 hours. For additional questions or concerns, please contact support.
                    </p>

                    <v-checkbox
                      label="I understand the above details and would like to permanently delete my account."
                      color="orange darken-3"
                      value="orange darken-3"
                      hide-details
                    ></v-checkbox>
                    <v-btn depressed large color="primary" @click>Delete Account</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex>
      </v-layout>
      <v-card-text></v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      fname: "",
      lname: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      checkbox: false,
      items2: [
        {
          icon: true,
          title: "Personal Information",
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
      length: 3,
      window: 0,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>

<style>
</style>
