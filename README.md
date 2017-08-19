# Express File Upload

A simple project to show off file upload (specifically pictures) in Express with an Angular front-end.  Demonstrates this functionality by allowing people to upload pictures/info about their pet rats.

## How it works

### Server-side

This project uses [express-fileupload](https://www.npmjs.com/package/express-fileupload).

Here's the relevant code (from `server/controllers/rats.js`), with annotations:

```javascript
let new_rat = new Rat(req.body)

if(req.files.picture){ // express-fileupload puts any uploaded files in an object saved under req.files.  In this case, my form has a field named "picture", so the uploaded file is in req.files.picture
    let file = req.files.picture
    let file_type = file.mimetype.match(/image\/(\w+)/) // I wanted to make sure that the uploaded file was actually an image and grab the extension for when I rename the file later.  There's _probably_ a better way to do this, such as by inspecting the file name instead of the mimetype.
    let new_file_name = ""

    if(file_type){
        let new_file_name = `${new Date().getTime()}.${file_type[1]}` // I was concerned that two users would upload files with the same name, so I rename the picture to the Unix time it was received (to the millisecond).  Now there's a potential problem if two images come in at the exact same moment, but that at least seems unlikely.  One solution would be to name the file after the database _id instead (assuming there's exactly one image per database, as in this project)
        file.mv(path.resolve(__dirname, "../../static/imgs/", new_file_name), (err) => { // I could not figure out where express-fileupload saves the uploaded files by default; it certainly doesn't put them anywhere in the project directory.  Best guess is that it's saving them in a temporary folder.  In any case, to actually access the picture again, I have to move it.
            console.log("file move error", err) // Add real error handling here, natch
        })
        new_rat.pic_url = new_file_name
    }
}
```

### Client-side

In Angular, the `@ViewChild` decorator can be used to access DOM elements that have a template reference variable (the thing with the pound sign attached to HTML tags).  So if we have this in our HTML (`client/src/app/rats/rats-create/rats-create.component.html`) ...

```html
<form #form (submit)="create_rat($event)">
    ...
</form>
```

...and this in our component definition (`client/src/app/rats/rats-create/rats-create.component.ts`)...

```typescript
@ViewChild("form") my_form
```

...then we can write the following `create_rat` method:

```typescript
create_rat(){
    let form_data = new FormData(this.my_form.nativeElement)

    this.rat_service.post_rat(form_data)
        .then(() => {
            ... // redirect, probably
        })
}
```

This uses the FormData class, which is built into vanilla JavaScript specifically to be used for AJAX requests.  We could build the FormData piece by piece (using `form_data.append` for each field), but thanks to `@ViewChild` we have a reference to our actual form, so we'll just feed that to the constructor.  As of Angular 4, you can pass a FormData object as the second argument in `http.post` and it will automatically choose the correct request headers; if you're still using Angular 2, you'll have to set the headers manually.

While writing this code, I relied heavily on two StackOverflow answers: 
* [File Upload in Angular 2?](https://stackoverflow.com/a/40216616/5749040) by user [Eswar](https://stackoverflow.com/users/4793153/eswar)
* [How to reset selected file with input tag file type in Angular 2?](https://stackoverflow.com/a/40165524/5749040) by user [Stefan Svrkota](https://stackoverflow.com/users/6677986/stefan-svrkota)

