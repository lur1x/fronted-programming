type Presentation = { 
    id: string, 
    title: string, 
    slide: Slide, 
    backgroundColor?: string, 
    slideCollect: SlideCollection, 
    selection: SelectOf, 
} 
 
type SlideCollection = { 
    id: string, 
    title: string, 
    slides: Slide[], 
    selectSlideId?: string, 
} 
 
type SelectOf = { 
    selectSlideIds: string[], 
    selectObjectIds: string[], 
} 
 
type Slide = { 
    id: string, 
    title?: string, 
    objects: SlideObject[], 
    duration?: number,
} 
 
type Position = {
    ox: number, 
    oy: number, 
} 
 
type Size = { 
    width: number, 
    height: number, 
} 
 
type SlideObject =  
    | TextObject 
    | ImgObject; 
 
type TextObject = { 
    id: string, 
    type: 'text', 
    fontFamily: string, 
    fontSize: number, 
    pos: Position, 
} 
 
type ImgObject = { 
    id: string, 
    type: 'image', 
    src: string, 
    pos: Position, 
    size: Size, 
} 
 
type Background = { 
    type: 'none' | 'image' | 'solidColor' | 'gradient', 
    image?: string, 
    color?: string, 
    gradient?: Gradient, 
} 
 
type Gradient = { 
    type: 'linear' | 'radial', 
    color: string[], 
    positions?: number[], 
}