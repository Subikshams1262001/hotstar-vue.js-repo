<<template>
  <div>
    <center>
      <h3>Subscribe to get more out of Disney+ Hotstar</h3>
      <b-table
        :fields="fields"
        :items="items"
        class="text-white w-75"
        foot-clone
      >
        <!-- A custom formatted data column cell -->
        <template #cell(offers)="data">
          {{ data.value.offer }} {{ data.value.last }}
        </template>

        <!-- A custom formatted header cell for field 'name' -->
        <template #head(offers)="data">
          <span class="text-info">{{ data.label.toUpperCase() }}</span>
        </template>

        <!-- A custom formatted footer cell for field 'name' -->
        <template #foot(offers)="data">
          <span class="text-danger">{{ data.label }}</span>
        </template>

        <!-- Default fall-back custom formatted footer cell -->
        <template #foot()="data">
          <i>{{ data.label }}</i>
        </template>
      </b-table>
    </center>
  </div>
</template>

<script>
export default {
  name: "subscribe",
  data() {
    return {
      fields: [
        // A column that needs custom formatting
        { key: "offers", label: "" },
        // A regular column
        "FREE",
        // A regular column
        "VIP",
        "PREMIUM",
      ],
      items: [
        {
          offers: { offer: "Unlimited Live Sports" },
          FREE: "Male",
          VIP: 42,
          PREMIUM: 67,
        },
        {
          offers: { offer: "Hotstar Specials & Star serials before TV" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Multiplex & new Indian movies" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Disney+ movies, Hollywood movies & Kids content" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Disney+ movies, Hollywood movies & Kids content" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Ad free entertainment" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Screens you can watch on" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Video quality" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
        {
          offers: { offer: "Audio quality" },
          FREE: "Female",
          VIP: 36,
          PREMIUM: 78,
        },
      ],
    };
  },
};
</script>

<!--<script>
// @ is an alias to /src

export default {
  name: "Subscribe",
};
</script>-->
