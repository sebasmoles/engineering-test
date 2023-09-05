<template>
  <article class="people-card">
    <div>
      <img
        :src="item?.picture || placeholder"
        alt="Profile picture"
        style="height: 50px; border-radius: 50%"
      />
    </div>
    <div class="w-full overflow-hidden">
      <div
        class="flex align-items-center justify-content-between"
        style="gap: 30px"
      >
        <div class="flex align-items-baseline overflow-hidden">
          <span class="people-card-title text-truncate w-full">
            {{ item?.name }}
          </span>
          <img
            v-if="item?.verified"
            src="@/assets/icons/check.svg"
            alt="Check mark"
            style="height: 12px; margin-left: 5px"
          />
        </div>
        <!-- Heart favorite icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style="fill: gray; width: 16px; min-width: 16px"
        >
          <path
            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
          />
        </svg>
      </div>
      <div>
        <span class="people-card-subtitle text-truncate w-full">
          {{ item?.professionalHeadline }}
        </span>
      </div>
    </div>
  </article>
</template>

<script>
  import placeholder from "@/assets/user-placeholder.png";
  export default {
    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },
    setup: () => ({
      placeholder,
    }),
  };
</script>

<style lang="scss">
  .people-card {
    width: 100%;
    padding: 16px;
    height: 100px;
    background-color: #27292d;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    cursor: pointer;

    &-title {
      color: #cddd39;
    }

    &-subtitle {
      font-size: 0.8rem;
    }
  }
</style>
