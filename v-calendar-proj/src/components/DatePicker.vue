<template>
  <div>
    <!-- <v-date-picker
      v-model="date"
      mode="date"
      style="display: none"
    />
    <v-date-picker
      v-model="time"
      mode="time"
      is24hr
      style="margin-right: 20px"
    />
    <v-date-picker
      v-model="dateTime"
      mode="dateTime"
      is24hr
    /> -->
    <!-- <v-date-picker
      v-model="range"
      is-range
    /> -->
    <v-date-picker
      v-model="range"
      is-range
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div class="flex justify-center items-center">
          <input
            :value="inputValue.start"
            v-on="inputEvents.start"
          >
          <span> → </span>
          <input
            :value="inputValue.end"
            v-on="inputEvents.end"
          >
        </div>
      </template>
    </v-date-picker>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data() {
    return {
    //   date: new Date(),
    //   time: new Date(),
    //   dateTime: new Date(),
      range: {},
    };
  },
};
</script>
