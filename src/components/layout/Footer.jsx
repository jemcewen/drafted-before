function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-neutral text-neutral-content footer-center'>
      <div>
        <p>&copy; {footerYear} James McEwen</p>
      </div>
    </footer>
  );
}
export default Footer;
