const less = (`/* config.css requires less.js*/
/*@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");*/
/*TODO: bootstrap-f44597ba/css/bootstrap.min.css has a parse issue with a missing bracket*/
@import (less) "bootstrap-f44597ba/css/bootstrap.css";
@import (less) "bootstrap-0cee321f/css/bootstrap.min.css" print;
/*@import (less) "https://s3-us-west-2.amazonaws.com/cdn.ackmanlab.com/css/bootstrap-f44597ba/css/bootstrap.css";*/
/*@import (less) "https://s3-us-west-2.amazonaws.com/cdn.ackmanlab.com/css/bootstrap-0cee321f/css/bootstrap.min.css" print;*/

@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot');
  src: url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.woff') format('woff'), url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}

img {
    max-width: 700px;
}

/* Merge highlight.js css style with bootstrap defaults*/
.hljs {
  padding: 0;
  background: #f5f5f5;
}

/* rm hr display that is auto inserted by markdown-it-footnotes*/
.footnotes-sep {display: none;}

/* Make page display in browser similar to markserv/less/github.less*/
body {
  width: 816px;
  border: 1px solid #ddd;
  outline: 1300px solid #fff;
  margin: 16px auto;
  padding: 48px;
}


/*body {
    text-align: justify;
    text-justify: auto;
}*/

/*p,
figcaption {
    text-align: justify;
    text-justify: inter-word;
}*/

/*Suppress pandoc body H1 title output from standalone output (from title yaml metadata)*/
.title {display: none;}

/*Fix bibliograpy lists using .footnotes class*/
.footnotes, .references {
    font-size: 88%;
}

/*.footnotes > ol,
.footnotes > ul,
.footnotes > ol li,
.footnotes > ul li { margin-left:0; padding-left:0; list-style-position:inside; }
*/

/*li > p:first-child {
    margin: 0;
}

ol, 
ul {
  padding: 0;
  margin-left: 1.3em;
}

*/

/*ol {
    list-style-position: inside; 
    padding-left: 0;
}*/

.footnotes ol{ 
counter-reset: foo;
display: table;
margin-left:0; 
padding-left:0;
}

.footnotes ol > li {
    counter-increment: foo;
    display: table-row;
}

.footnotes ol > li::before {
    content: counter(foo) ".";
    display: table-cell;
    text-align: right;
}

.footnotes > ol > li > p {
    padding-left: 5px;
}
/*Add description list element padding*/
dd {
  padding-left: 10px;
}

/*Set figure, figcaptions for caption text to be bounded to image width*/
figure {
   display: table;
   /*margin-bottom: 6px;*/
}

figcaption {
    display: table-caption;
    caption-side: bottom;
    font-size: 88%;
    font-weight: 300;
    padding: 0.25em;
    /*margin-bottom: 0;*/
}

/*Custom classes for div containers*/
.float-left {
    float: left;
    margin-right: 6px;
    /*margin-bottom: 6px;*/
    /*border: 1px solid #dddddd;*/
    /*border-bottom: none;*/
    page-break-after: avoid;
}

.float-right {
    float: right;
    margin-left: 6px;
    /*margin-bottom: 6px;*/
    /*border: 1px solid #dddddd;*/
    /*border-bottom: none;*/
    page-break-after: avoid;
}

.border {
  border: 1px solid #ddd;
}


/*.float-left > figcaption,
.float-right > figcaption {
    border: 1px solid #cccccc;
    border-top: none;
}*/

/*.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}*/


table {
  /*background-color: transparent;*/
  /* required for .table-responsive overflow to work */
  display:block;
  &:extend(.table all, .table-bordered all, .table-striped all, .table-responsive all, .table-hover all);
  width: auto;
  max-width: 100%;
  /*margin-bottom: 12px;*/
  font-weight: 300;
}
caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777777;
  text-align: left;
}
th {
  text-align: left;
}

table > thead > tr > th,
table > tbody > tr > th,
table > tfoot > tr > th,
table > thead > tr > td,
table > tbody > tr > td,
table > tfoot > tr > td {
  padding: 0 10px 3px 3px;
  line-height: 1.2;
  vertical-align: top;
}
table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #dddddd;
}


/*Add back in horizontal x-scrolling for overflow code blocks (otherwise bootstrap/code breaks this)*/
pre {
    overflow-x: auto;
}

pre code {
    overflow-wrap: normal;
    white-space: pre;
}

@media print {
  /*
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
    text-shadow: none !important;
  }
  */

  /*.btn-group button {
    display: none;
  }*/

  body {
      text-align: justify;
      text-justify: auto;
      width: 100%;
      border: none;
      outline: none;
      margin: 0;
      padding: 0;
      color: #000;
  }

    *,
    *:before,
    *:after {
      background: transparent !important;
  }

  /*Reduce header margin-bottom and top a little bit from default*/
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3 {
    margin-top: 11px;
    margin-bottom: 3px;
  }
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .page-break { display: block; page-break-before: always; }

  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  
  figure,
  table,
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }

  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
  .citation a:link, 
  .citation a:visited, 
  .citation a:hover, 
  .citation a:active,
  .footnote-ref a:link, 
  .footnote-ref a:visited, 
  .footnote-ref a:hover, 
  .footnote-ref a:active {
    color: #333333;
  }
  h1 { font-size: 16px;
  }
  .footnotes, 
  .references { 
    text-align: left;
  }
}

.file{ list-style-image: url('https://cdn4.iconfinder.com/data/icons/linecon/512/file-16.png'); }
.dir{ list-style-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/699086-icon-94-folder-16.png'); }
.md{ list-style-image: url('https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-16.png'); }

.katex { font-size: 1.5em; }
`)

module.exports = less
