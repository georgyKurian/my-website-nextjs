import moment from 'moment';

class Post {
  constructor({
    title, excerpt, coverImage, date, ogImage, content, categories,
  }) {
    this.title = title;
    this.excerpt = excerpt;
    this.coverImage = coverImage;
    this.date = moment(date);
    this.ogImage = ogImage;
    this.content = content;
    this.categories = categories;
  }

  getFormattedDate(format = 'MMMM Do YYYY') {
    return this.date.format(format);
  }
}

export default Post;
