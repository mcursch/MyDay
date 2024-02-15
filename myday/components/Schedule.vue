<script lang="ts" setup>
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const times = [
  '6:00 AM',
  '12:00 PM',
  '6:00 PM',
  '12:00 AM'
]
</script>

<template>
  <div class="bg-black text-white h-full w-full">
    <div class="container mx-auto text-white py-20" >
      <div class=" bg-violet-500 w-full rounded-lg h-[45rem] w-50">
        <div class=" bg-violet-300 p-5 rounded-t-lg">

            <span class="text-black">
              (current month)
            </span>
          <Button color="purple">Create Event</Button>
          <Button color="red">Delete Event</Button>
        </div>

        <div class="grid grid-cols-7">
          <div v-for="day in days">
            <!--              Day Component-->

            <div class=" border border-gray-400 border-x-1 h-[40rem] text-center text-black">
              {{ day }}
              <!--              Time Component-->

              <div class="pb-5"></div>
              <div v-for="time in times">
                <div class="border border-1 border-gray-600 text-left text-xs h-10">
                  {{ time }}


                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


    </div>
  </div>
</template>

<style scoped></style>
