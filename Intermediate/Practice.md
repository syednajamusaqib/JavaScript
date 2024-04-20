# JS DOM Practice File

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .bg-count{
            background-color: #212121;
            color: #ffffff;
        }
    </style>
</head>
<body class="bg-count">
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
</html>
`

## Tasks
- Target parent class and use loop to print all text using .children
- Once You have parent class selected go to first and last child
- Target first day class and then go to next day by nextElementSibling

## Create Your Own Element

- Create a div (with id, class, style, attribute, text)
`
    const div = document.createElement("div");
    div.className = "div";
    div.id = "divId";
    div.setAttribute("title","DOM");
    div.style.color = "green";
    // Create text node
    // First Method
    // div.innerText = "Syed Najam";
    // Second Method (preffered One)
    const text = document.createTextNode("Syed Najam");
    div.appendChild(text);
    // document.appendChild(div);

    document.body.appendChild(div);
    console.log(div);
`

- Create a h1