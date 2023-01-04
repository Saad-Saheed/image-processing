* This is the first project from udacityxALX full stack javascript course, the main function of this app is to accept the file (image) name and process the image with the specify width and height. Then it will save the processed version of the image to public/images/thumbnail.


- To run the app kindly:

1. clone/download the source code
2. run 
```bash
npm install
```
3. run 
```bash
npm run start
``` 
to start server
4. goto <a href="http://localhost:3000/api/image/process">http://localhost:3000/api/image/process</a> to view the app in your browser


- How to use the app after setting it up

1. check public/images/full directory to see available images
2. pass the name of any of the images to the app link in step 4. above as query string. e.g <a href="http://localhost:3000/api/image/process?filename=palmtunnel">http://localhost:3000/api/image/process?filename=palmtunnel</a>
3. step 2. above will only display the image in original size
4. pass the width and height you want the image to be resize to. e.g <a href="http://localhost:3000/api/image/process?filename=palmtunnel&width=200&height=200">http://localhost:3000/api/image/process?filename=palmtunnel&width=200&height=200</a>
5. your output will be display and also store inside public/images/thumbnail e.g public/images/thumbnail/palmtunnel_200x200.jpg


- Testing with jasmine and supertest

    - you are require to stop server before running test, as the test will start server on their own if needed
1. to build typescript and run jasmine test, run 
```bash
npm run test
```
2. to run jasmine test without building Typescript run 
```bash
npm run jasmine
```


- Other Script

1. to run prettier, run 
```bash
npm run prettier
```
2. to run eslint, run 
```bash
npm run lint
```