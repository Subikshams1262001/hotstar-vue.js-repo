<template>
  <div class=" bg-dark">
    <form>
      <center>
        <h3 class="text-white">
          Subscribe to get more out of Disney+ Hotstar
        </h3>

        <b-table :fields="fields" :items="items" class="text-white  mt-5 w-75">
          <template #cell(name)="data">
            {{ data.value.first }}
          </template>
        </b-table>
        <button
          type="button"
          class="btn btn-info btn-lg p-1 ms-2 w-25  fw-bold "
        >
          <button class="btn btn-warning fw-bold">VIP</button><br />
          399/year
        </button>
        <button type="button" class="btn btn-info  p-1 ms-2 w-25  fw-bold ">
          <button class="btn btn-primary fw-bold text-dark">PREMIUM</button
          ><br />1499/year
        </button>
        <button type="button" class="btn btn-info  p-1 ms-2 w-25  fw-bold ">
          <button
            class="btn bg-success fw-bold
          "
          >
            PREMIUM</button
          ><br />299/month
        </button>
        <br />
        <button
          type="button"
          class="btn-info btn-lg w-75 h-15 mt-2 fw-bold fs-5"
        >
          CONTINUE
        </button>
      </center>
      <br /><br />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{ key: "name", label: "" }, "Free", "VIP", "PREMIUM"],
      items: [
        {
          name: { first: "Unlimited Live Sports" },
          Free: " ✗",
          VIP: " ✓",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Hotstar Specials & Star Serials before on TV" },
          Free: "✗",
          VIP: "✓",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Multiples & new Indian movies" },
          Free: "✗",
          VIP: "✓",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Disney+movies Hollywood movies & Kids content" },
          Free: " ✗",
          VIP: "Only Dubbed",
          PREMIUM: " English+Dubbed",
        },
        {
          name: { first: "English shows & Disney+ Originals" },
          Free: " ✗",
          VIP: " ✗",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Ad free entertainment" },
          Free: " ✗",
          VIP: "✗",
          PREMIUM: " ✓",
        },
        {
          name: { first: "Screens you can watch on" },
          Free: " 1",
          VIP: " 1",
          PREMIUM: " 2",
        },
        {
          name: { first: "Video quality" },
          Free: "SD",
          VIP: "HD",
          PREMIUM: "4K",
        },
        {
          name: { first: "Audio quality" },
          Free: "Stereo",
          VIP: "Dolby5.1",
          PREMIUM: "Dolby5.1",
        },
      ],
    };
  },
};
</script>
<style></style>
