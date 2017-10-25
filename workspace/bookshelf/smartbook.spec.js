function search(AmazonService) {
    this.AmazonService = AmazonService

    this.Searchbook = (isbn) => {
        return this.AmazonService(isbn)
    }
}

test('Search book in your shelf', () => {
    const returnObject = {
        title: 'Witty',
        image: '1234.jpg',
        isbn: '00001'
    }

    const smartbookmock = jest.fn('00001')
        .mockReturnValue(returnObject)

    let app = new search(smartbookmock)
    let value = app.Searchbook('00001')

    expect(value).toEqual(returnObject)
    expect(smartbookmock).toBeCalled()
    expect(smartbookmock).toBeCalledWith('00001')
})