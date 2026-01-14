// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/rahulkolayikkath.github.io/personal-website/rahul_resume_jan2026.pdf";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of selected projects. Click for more details!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-test-blog",
        
          title: "Test Blog",
        
        description: "This is how we create a new blog",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/test-blog/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-understanding-handwritten-exam-answers-from-scanned-documents",
          title: 'Understanding Handwritten Exam Answers from Scanned Documents',
          description: "Segmenting and associating handwritten student answers with questions in scanned exam booklets using vision-language models and spatial reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_1/";
            },},{id: "projects-language-modelling-for-learning-robust-polymer-representations",
          title: 'Language Modelling for Learning Robust Polymer Representations',
          description: "A BERT based chemical language model to learn polymer representations(Master&#39;s Project)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project_2/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%68%75%6C%6B%6F%6C%61%79%69%6B%6B%61%74%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rahulkolayikkath", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rahul-krishna-k", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Rahul_krish146", "_blank");
        },
      },];
