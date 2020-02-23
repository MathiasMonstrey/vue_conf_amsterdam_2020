<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          md="3"
          sm="4"
          v-for="speaker in sortSpeakers"
          :key="speaker.name"
        >
          <v-card class="mx-auto" max-width="300">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="`/images/${speaker.social.twitter}.jpg`"
            >
              <v-card-title
                style="word-break: break-word; background-color: rgb(30, 185, 128, 0.7);"
              >
                <a
                  :href="`https://twitter.com/${speaker.social.twitter}`"
                  target="_blank"
                  class="no-style"
                  ><v-icon>mdi-twitter</v-icon> {{ speaker.name }}</a
                >
              </v-card-title>
            </v-img>

            <template v-if="speaker.slide">
              <v-card-subtitle>{{ speaker.slide.title }}</v-card-subtitle>

              <template v-if="hasSlides(speaker)">
                <v-card-actions>
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
              <template v-else>
                <v-card-text style="color: rgb(255, 82, 82);"
                  >No slides available</v-card-text
                >
              </template>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { speakers, Speaker } from "./speakers";

export default Vue.extend({
  name: "App",
  setup() {
    const hasSlides = (speaker: Speaker) => {
      if (speaker.slide) {
        return (
          speaker.slide.link || speaker.slide.mirror || speaker.slide.download
        );
      }
      return false;
    };
    const sortSpeakers = speakers.sort((speaker1, speaker2) =>
      hasSlides(speaker1) ? -1 : 1
    );
    return { sortSpeakers, hasSlides };
  }
});
</script>

<style lang="scss" scoped>
.no-style {
  color: white;
  text-decoration: none;
}
</style>
