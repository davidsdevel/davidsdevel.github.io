export default function ArticleStyles() {
    return <style jsx global>{`
        .ck-content h3,
        .ck-content h4 {
          margin-top: 1rem !important;
          margin-bottom: 1rem !important;
          font-weight: bold !important;
          color: #001122 !important;
        }

        .ck-content h3 {
          font-size: 1.5rem !important;
        }

        .ck-content h4 {
          font-size: 1.3rem !important;
        }

        .ck-content p {
          margin: 1rem 0 !important;
        }

        .ck-content img {
          border-radius: 0.5rem !important;
        }

        .ck-content a {
          color: #e65806 !important;
          text-decoration: underline !important;
        }

        .ck-content b,
        .ck-content strong {
          color: #e65806 !important;
        }

        .ck-content blockquote {
          padding: 1rem 2rem !important;
          font-style: italic !important;
          border-radius: 0.5rem !important;
        }

        .ck-content blockquote,
        .ck-content blockquote span {
          background: #f8fafc !important;
        }

        .ck-content ol,
        .ck-content ul {
            padding-left: 1.5rem;
        }
        .ck-content ul li {
            list-style: disc;
        }
    `}</style>
}
