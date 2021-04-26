<template>
  <div>
    <v-calendar
      :attributes="attrs"
    />
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      attrs: [
        // 日期單選
        {
          highlight: true, // 未指定顏色時，預設為藍色
          dates: new Date(2021, 3, 20),
        },
        {
          highlight: 'purple',
          dates: new Date(2021, 3, 21),
        },
        {
          highlight: {
            color: 'green',
            fillMode: 'outline', // 空心圓
          },
          dates: new Date(2021, 3, 22),
        },
        {
          dot: 'red', // 在日期下方有一個實心小點
          dates: new Date(2021, 3, 23),
        },
        {
          dot: 'yellow',
          dates: new Date(2021, 3, 24),
        },
        {
          dot: 'red',
          dates: new Date(2021, 3, 24),
        },
        {
          bar: 'gray',
          dates: new Date(2021, 3, 25),
        },
        {
          bar: 'yellow',
          dates: new Date(2021, 3, 26),
        },
        {
          bar: 'red',
          dates: new Date(2021, 3, 26),
        },
        // 日期區間
        {
          highlight: true,
          dates: { start: new Date(2021, 4, 4), end: new Date(2021, 4, 8) },
        },
        {
          dot: 'green',
          dates: { start: new Date(2021, 4, 11), end: new Date(2021, 4, 15) },
        },
        {
          bar: 'purple',
          dates: { start: new Date(2021, 4, 18), end: new Date(2021, 4, 22) },
        },
      ],
    };
  },
};
</script>
