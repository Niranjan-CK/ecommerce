import { Hero } from "./Components/Hero"
import { FeaturedProducts } from "./Components/FeaturedProduct"
import { Testimonials } from "./Components/Testmonial"
import { Faq } from "./Components/Faq"
export const HomePages = () => {
    return(
        <main>
            <Hero/>
            <FeaturedProducts/>
            <Testimonials/>
            <Faq/>
        </main>
    )
}