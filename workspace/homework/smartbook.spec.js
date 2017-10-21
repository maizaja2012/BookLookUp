function Bookshelf(AmazonService) {
    this.AmazonService = AmazonService

    this.search = (bookname, isbn) => {
        var obj = this.AmazonService(bookname, isbn)
        return {
            title: obj.title,
        }
    }
}

test('Smart Book Shelf', () => {
    const smartbookMock = jest.fn()
        .mockReturnValue({
            title: 'Computer',
            image: '2556.jpg',
            isbn: '0001'
        })
    
    var book = new Bookshelf(smartbookMock)

    var bookname = 'Internet'
    var cover = 'Internet'
    var isbn = '0001'

    var result = book.search(bookname, isbn)
    
    expect(result.bookname).toBe('Internet')
    expect(smartbookMock).toHaveBeenCalled()
})