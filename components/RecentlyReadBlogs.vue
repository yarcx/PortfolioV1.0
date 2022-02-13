<template lang="">
  <div
    class="md:w-[25%] z-4 h-full border-l border-solid border-[color:var(--lightThemBorderColor)] dark:border-[color:var(--darkThemeBorderColor)] hidden md:flex flex-col items-stretch"
  >
    <!-- Header search bar section starts here -->
    <div
      class="flex-col items-center justify-center hidden w-full h-12 px-2 py-1 md:flex"
    >
      <div
        ref="searchInputContainer"
        data-searchInputContainer
        class="flex items-center w-full gap-2 p-2 bg-gray-100 rounded-full focus:ring focus:ring-black dark:bg-gray-900"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" class="w-4 h-4">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
        <input
          type="search"
          class="w-full h-full text-black bg-transparent border-0 outline-none dark:text-white"
          placeholder="Search recent reads"
          data-searchInput
          v-model="searchBlogTitle"
        />
      </div>
    </div>
    <!-- The main section side nav starts here -->

    <section
      class="h-[94%] mt-2 mx-auto bg-[color:var(--blogLightThemeBg)] dark:bg-gray-900 text-black dark:text-white w-[94%] py-2 rounded-xl"
    >
      <header class="px-2 mb-2">
        <h3 class="text-[1.2rem] font-bold">
          Recently Read <span class="underline">Articles</span>
        </h3>
      </header>

      <article
        v-for="(blog, index) in filteredBlogPost()"
        :key="index"
        class="p-2 my-1 transition cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <span
          class="text-sm cursor-pointer text-[color:var(--smallLinksLightColor)] flex justify-between items-center dark:text-[color:var(--smallLinksDarkColor)]"
          >By {{ blog.author }}</span
        >
        <a target="-" :href="blog.linkUrl">
          <h4 class="font-bold">
            {{ blog.title }}
          </h4>
        </a>
        <p class="font-light truncate">
          {{ blog.firstParagraph }}
        </p>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: 'RecentlyReadBlog',
  data() {
    return {
      searchBlogTitle: '',
      blogs: [
        {
          author: 'Refactoring Guru',
          title: 'The Catalog of Design Patterns',
          firstParagraph:
            'These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.',
          linkUrl: 'https://refactoring.guru/design-patterns/catalog',
        },

        {
          author: 'Danny Adams',
          title: 'Learn TypeScript – The Ultimate Beginners Guide',
          linkUrl:
            'https://www.freecodecamp.org/news/learn-typescript-beginners-guide/',
          firstParagraph:
            'TypeScript has become increasingly popular over the last few years, and many jobs are now requiring developers to know TypeScript.',
        },

        {
          author: 'JavaScript Language',
          title: 'Class inheritance',
          firstParagraph:
            'Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.',
          linkUrl: 'https://javascript.info/class-inheritance',
        },
        {
          author: 'JavaScript Language',
          title: 'Class basic syntax',
          firstParagraph:
            'In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).',
          linkUrl: 'https://javascript.info/class',
        },
        {
          author: 'JavaScript Language',
          title: 'Recursion and stack',
          firstParagraph:
            'Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.',
          linkUrl: 'https://javascript.info/recursion',
        },
        {
          author: 'Chimezie Innocent',
          title: 'Understanding React’s useEffect cleanup function',
          linkUrl:
            'https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/',
          firstParagraph:
            'React’s useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.',
        },
      ],
    }
  },
  methods: {
    filteredBlogPost() {
      if (this.searchBlogTitle) {
        console.log(this.searchBlogTitle.toLowerCase(), 'hello world')
        return this.blogs.filter(
          (blog) =>
            blog.title
              .toLowerCase()
              .includes(this.searchBlogTitle.toLowerCase()) ||
            blog.author
              .toLowerCase()
              .includes(this.searchBlogTitle.toLowerCase())
        )
      }
      return this.blogs
    },
  },
}
</script>
<style>
.line {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
