export const metadata = {
  title: 'AMOD5410H Project',
}

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ImageTextSection from '@/components/ImageTextSection';
import ComparisonTable from '@/components/ComparisonTable';
import dynamic from 'next/dynamic';

const DynamicTeamMembers = dynamic(() => import('@/components/TeamMembers'), { ssr: false }); 


export default function Home() {
  return (
    <>
      <Hero />
      <ImageTextSection
        image="images/SmallFigure_4.png"
        text="Tensorflow Small Bank Data: Our workstation's resource usage during model training is depicted in the graphs. These visualizations show that completing 6 epochs takes less than a second, with the CPU usage fluctuating between 3% and 13%, while the memory usage consistently stays at 92%. Additionally, we analyze our model to observe the training and testing accuracy and loss for each epoch. This analysis helps us identify the most suitable number of epochs while considering both overfitting and underfitting of the data. However, due to the small amount of data, we do not see any major differences in this regard."
      />
      <ImageTextSection
        image="images/BigFigure_4.png"
        text="Tensorflow Big Bank Data: The graphs illustrate our workstation's resource utilization during model training. They indicate that completing 6 epochs takes less than a second, with CPU usage fluctuating between 2% and 9%, and memory usage remaining between 92% and 95%. Analyzing our model reveals the training and testing accuracy and loss for each epoch, helping us identify the optimal number of epochs while considering overfitting and underfitting. The substantial volume of data allows us to observe significant performance variances during each training epoch."
        showHeader={false}
      />
      <ImageTextSection
        image="images/BQFigure1.png"
        text="Big Query - Small Bank Data: The graph above illustrates the loss rate, duration, and learning rate for the small dataset. The loss rate decreases as the iterations progress, indicating improvement in the model. The training duration for each iteration fluctuates, possibly due to variations in the complexity of the data or other factors. The learning rate increases as the iterations progress, suggesting a dynamic adjustment to optimize model performance. Building this model consumed a total of 32 seconds. Validation took 2 seconds, preprocessing took 2 seconds, training took 24 seconds, and evaluation took 3 seconds. This breakdown helps understand the time distribution in the model-building process."
        showHeader={false}
      />
      <ImageTextSection
        image="images/BQFigure2.png"
        text="Big Query - Big Bank Data: The graph above illustrates the loss rate, duration, and learning rate for the small dataset. The loss rate decreases as the iterations progress, indicating an improvement in the model. Interestingly, the training duration for the 5th iteration was higher than the average time duration for other iterations, which may indicate a particularly complex or resource-intensive process during that iteration. The learning rate increases as the iterations progress, suggesting a dynamic adjustment to optimize model performance. Building this model consumed a total of 36 seconds. Validation took 1 second, preprocessing took 7 seconds (a 250% increase compared to the small data), training took 25 seconds, and evaluation took 3 seconds. This comparison highlights the significant increase in preprocessing time for this dataset compared to the small data, which may be due to the larger size or complexity of the dataset."
        showHeader={false}
      />
      <ComparisonTable />
      <Features />
      <DynamicTeamMembers />
    </>
  )
}