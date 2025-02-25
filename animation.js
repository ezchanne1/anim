const frames = [
    "(•_•) \n<)   )╯\n /    \\",
    "(•_•) \n<(   (> \n /    \\"
];

let index = 0;

export default function handler(req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.send(frames[index % frames.length]);
    index++;
}
