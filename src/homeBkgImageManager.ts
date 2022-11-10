let instance: HomeBkgImageManager
export default class HomeBkgImageManager  {
    images: any[] = []
    currentIndex: number = -1

    static get shared() {
        if (!instance) {
            instance = new HomeBkgImageManager()
        }
        return instance
    }

    showImageWithIndex(index: number) {
        let element = document.getElementById('home_bkg')
        if (!element) return
        //同一个节点忽略
        if (index === this.currentIndex) return
        //移除老的节点
        let lastImage = this.images[this.currentIndex]
        if (lastImage && element.contains(lastImage)) {
            element.removeChild(lastImage)
        }
        //更新新的节点
        let image = this.images[index]
        if (image) {
            element.insertAdjacentElement('afterbegin', image)
        }else {
            const img = document.createElement('img');
            img.style.width = '100%'
            img.style.height = '100%'
            img.style.position = 'absolute'
            img.style.zIndex = '0px'
            img.src = `${process.env.PUBLIC_URL}/light_${index}.jpg`;
            img.onload = () => {
                this.images[index] = img
                element?.insertAdjacentElement('afterbegin', img)
            };
        }
        this.currentIndex = index
    }

    loadImageWithoutIndex(index: number) {
        for (let i = 0; i <= 10; i++) {
            if (i === index) continue
            const img = document.createElement('img');
            img.style.width = '100%'
            img.style.height = '100%'
            img.style.position = 'absolute'
            img.style.zIndex = '0px'
            img.src = `${process.env.PUBLIC_URL}/light_${i}.jpg`;
            img.onload = () => this.images[i] = img;
        }
    }

    loadImages() {
        for (let i = 0; i <= 10; i++) {
            const img = document.createElement('img');
            img.style.width = '100%'
            img.style.height = '100%'
            img.style.position = 'absolute'
            img.style.zIndex = '0px'
            img.src = `${process.env.PUBLIC_URL}/light_${i}.jpg`;
            img.onload = () => this.images[i] = img;
        }
    }
}
