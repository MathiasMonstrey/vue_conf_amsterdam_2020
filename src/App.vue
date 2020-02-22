<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col md="3" sm="4" v-for="speaker in speakers" :key="speaker.name">
          <v-card class="mx-auto" max-width="300">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="`/images/${speaker.social.twitter}.jpg`"
            >
              <v-card-title
                style="word-break: break-word; background-color: rgb(30, 185, 128, 0.7);"
                >{{ speaker.name }}</v-card-title
              >
            </v-img>

            <template v-if="speaker.slide">
              <v-card-subtitle>{{ speaker.slide.title }}</v-card-subtitle>

              <v-card-actions>
                <v-btn
                  :href="`https://twitter.com/${speaker.social.twitter}`"
                  icon
                  color="primary"
                  target="_blank"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  icon
                  v-if="speaker.slide.link"
                  color="primary"
                  :href="speaker.slide.link"
                  target="_blank"
                >
                  <v-icon>mdi-link</v-icon>
                </v-btn>
                <v-btn
                  icon
                  v-if="speaker.slide.download"
                  color="primary"
                  :href="`/slides/${speaker.slide.download}`"
                  target="_blank"
                >
                  <v-icon>mdi-download</v-icon>
                </v-btn>
              </v-card-actions>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { speakers } from "./speakers";

export default Vue.extend({
  name: "App",
  setup() {
    return { speakers };
  }
});
</script>
