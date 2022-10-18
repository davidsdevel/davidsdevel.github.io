export default function Footer() {
  const date = new Date();

  return <footer id="footer-copyright" className="footer-copyright">
    <div className="container">
      <div className="hm-footer-copyright text-center">
        <p>
          &copy; copyright David&apos;s Devel. {date.getFullYear()}
        </p>
      </div>
    </div>
    <div id="scroll-Top">
      <div className="return-to-top">
        <i className="fa fa-angle-up " id="scroll-top" ></i>
      </div>
    </div>
  </footer>
}