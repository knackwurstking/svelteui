<script lang="ts">
  import InfiniteSwipe, {
    Item as InfiniteSwipeItem,
  } from "../../../../infinite-swipe";
</script>

<main>
  <InfiniteSwipe orientation="horizontal">
    <InfiniteSwipeItem>
      <span>-1</span>
    </InfiniteSwipeItem>
    <InfiniteSwipeItem primary>
      <span>0</span>
    </InfiniteSwipeItem>
    <InfiniteSwipeItem>
      <span>1</span>
    </InfiniteSwipeItem>
  </InfiniteSwipe>
</main>
