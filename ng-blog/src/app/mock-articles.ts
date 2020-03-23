import { Article } from "./article";

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "My first article",
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mi ut erat dictum vulputate et id nisi. In hac habitasse platea dictumst. Suspendisse vitae nisi bibendum, congue augue ut, aliquam ex.</p><p>Nunc aliquam, diam mollis venenatis bibendum, neque magna posuere neque, vel venenatis ex turpis eget lacus. Vestibulum mi nibh, scelerisque facilisis nisl a, fermentum laoreet sem. Vivamus et rutrum ligula, a fringilla urna. Ut scelerisque magna tellus, quis dignissim nisl commodo sed. Nunc bibendum sollicitudin tincidunt. In semper, nunc ac mattis malesuada, erat nibh ultricies nulla, a facilisis dolor tortor in velit.</p><p>Aliquam lorem velit, rhoncus ut urna non, sollicitudin mollis augue. Vivamus congue risus nisi.</p>",
    description: "This is my first article text! It's great! Please read it.",
    key: "my-first-article",
    date: new Date(),
    imageUrl:
      "https://gblobscdn.gitbook.com/assets%2F-L9vDDYxu6nH7FVBtFFS%2F-LfVgc6Gv5iIoU6vdkG6%2F-LfVgg9R3goq0xVtKaFX%2Fangular-platform.png"
  },
  {
    id: 2,
    title: "My second article",
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id mi ut erat dictum vulputate et id nisi. In hac habitasse platea dictumst. Suspendisse vitae nisi bibendum, congue augue ut, aliquam ex.</p><p>Nunc aliquam, diam mollis venenatis bibendum, neque magna posuere neque, vel venenatis ex turpis eget lacus. Vestibulum mi nibh, scelerisque facilisis nisl a, fermentum laoreet sem. Vivamus et rutrum ligula, a fringilla urna. Ut scelerisque magna tellus, quis dignissim nisl commodo sed. Nunc bibendum sollicitudin tincidunt. In semper, nunc ac mattis malesuada, erat nibh ultricies nulla, a facilisis dolor tortor in velit.</p><p>Aliquam lorem velit, rhoncus ut urna non, sollicitudin mollis augue. Vivamus congue risus nisi.</p>",
    description: "This is my first article text! It's great! Please read it.",
    key: "my-second-article",
    date: new Date(),
    imageUrl:
      "https://www.ambient-it.net/wp-content/uploads/2019/04/whats-new-in-angular-min.jpg"
  }
];
