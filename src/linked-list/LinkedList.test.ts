import {LinkedList} from "./LinkedList";

function random(start: number, end: number){
  return Math.floor((Math.random() * end) + start);
}

describe('LinkedList', () => {
  it('should be of type LinkedList', function () {
    expect(new LinkedList()).toBeInstanceOf(LinkedList)
  });

  describe('push', ()=> {

    it('should return last added value', function () {
      const list = new LinkedList()
      let value = 0
      for (; value <= random(1, 10); ++value){
        list.push(value)
      }

      expect(list.push(value+1)).toBe(value+1)
    });
  })


  describe('includes', () => {
    it('should return true if list includes the value in the head', function () {
      const list = new LinkedList()
      list.push(1);
      list.push(2);
      expect(list.includes(1)).toBe(true)
    });

    it('should return true if list includes the value in the middle', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(3)
      list.push(4)
      expect(list.includes(3)).toBe(true)
    });

    it('should return true if list includes the value in the tail', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(3)
      list.push(4)
      expect(list.includes(4)).toBe(true)
    });

    it('should return false if list does not include a value', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(3)
      list.push(4)
      expect(list.includes(5)).toBe(false)
    });

  })


  describe('remove', () => {
    it('should remove element in the head', function () {
      const list = new LinkedList()
      list.push(1)
      list.remove(1)
      expect(list.includes(1)).toBe(false)
    });

    it('should remove element in the middle', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(2)
      list.push(3)
      list.remove(2)
      expect(list.includes(2)).toBe(false)
    });
    it('should remove last element', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(3)
      list.remove(3)
      expect(list.includes(3)).toBe(false)
    });

    it('should return removed element in head', function () {
      const list = new LinkedList()
      list.push(1)
      expect(list.remove(1)).toBe(1)

      list.push(1)
      list.push(2)
      expect(list.remove(1)).toBe(1)
    });

    it('should return removed element in the middle', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(2)
      list.push(3)
      expect(list.remove(2)).toBe(2)
    });

    it('should return removed element in tail', function () {
      const list = new LinkedList()
      list.push(1)
      list.push(3)
      expect(list.remove(3)).toBe(3)
      list.push(3)
      expect(list.remove(3)).toBe(3)
    });

  })

})