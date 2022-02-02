We use next cz:
1. Routing 
2. Code Splitting: it's mean that if client want to see only homepage  next runder only homepage.
3. API Routes: api rout are very usable when you are building out application and let's sey you wanted to go talk to a third-party service like algolia let's say you had your api secret key and client key that's not you want in react front end code you it's on the server side where it's hidden from prying eyes on the client in the browser.
4. Image optimization
5. Generating a site

getServerSideProps: will fetch the data at request at the time of request rather than 
getStaticProps: which is fetch data at buil time.