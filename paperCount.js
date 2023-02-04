
function paperRequirements(book1, book2, book3) {
    const paperForBook1 = 100;
    const paperForBook2 = 200;
    const paperForBook3 = 300;

    const paperRequires1 = book1 * paperForBook1;
    const paperRequires2 = book2 * paperForBook2;
    const paperRequires3 = book3 * paperForBook3;

    const totalPaperRequires = paperRequires1 + paperRequires2 + paperRequires3;
    return totalPaperRequires;
}

const totalPaper = paperRequirements(3,1,1);
console.log(totalPaper);

