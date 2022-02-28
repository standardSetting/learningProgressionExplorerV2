import NumericalScale from "../NumericalScale/NumericalScale"
import PageOutline from "../PageOutline"
function LayerOne(props){

    const disableTickMarksAndArrowHead = props.disableTickMarksAndArrowHead

    return (
        <div className='flex flex-row'>
            <PageOutline>
                <div className='f4 dark-purple'>Mathematics and its importance</div>
                <p>Mathematics is a way of knowing and reasoning that uses symbols and logic to describe, relate and manipulate quantities and abstract objects, both in themselves and as representations of real-world phenomena.</p>
                <p>It provides a universal language to describe and interpret many aspects of reality including properties of objects; quantities, proportions and rates; the likelihood of future events governed by probabilistic rules; and the relationships among elements in a system (such as roads in a network, or steps in a coding algorithm). If people can use this universal language, they can generate their own descriptions and interpretations of these aspects of reality, as well as understand the descriptions and interpretations of others. Given that it is based on logic, mathematics can also cultivate in people the habits of logical thinking – habits that can be of great use in, for example, problem solving and decision making. </p>
                <p>Knowing how to use the universal language and logic of mathematics is clearly advantageous in many work situations. Yet it is also of value at a personal, day-to-day level for a number of reasons. For example, one cannot become financially literate, nor can one understand and evaluate statistical claims made in the media, without having a grounding in mathematics. Moreover, understanding mathematics and adopting mathematical ways of thinking often supports the effective and efficient use of many elements of technology that are central to our everyday lives, including communications technology, computing, internet searches and global positioning systems.</p>
                <div className='f4 dark-purple'>Developing proficiency in mathematics</div>
                <p>A typical learning progression for mathematics would see learners building and displaying their understanding of core mathematical concepts through manipulating physical objects, including through inspection, classification, sorting and ordering. As they undertake activity of this kind, they would be developing informal vocabulary to describe what they observe. They would then become more familiar with the formal mathematical language and approaches that are used with concepts of cardinality, magnitude, shape, location, pattern, regularity, chance and data both in concrete and abstract contexts. Later, they would be able to describe relationships among variables, between geometric objects, and between other mathematical structures such as points, vectors, sets and matrices. As they mature mathematically, they are able to solve complex problems using reasoning based on an increasing range of abstract and formal mathematical knowledge.</p>
                <div className='f4 dark-purple'>Developing proficiency in mathematics</div>
                <p>In the context of ACER’s learning progression, progress in mathematics is considered from two perspectives. The first perspective considers progress as involving four interrelated competencies. The second perspective considers progress within three content areas that are commonly used to organise mathematics teaching and learning.</p>
            </PageOutline>
        </div>
    )
}

export default LayerOne