'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.1, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-12 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
        />
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-4xl mx-auto text-center text-white"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  translate,
}: {
  rotate: any
  scale: any
  translate: any
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 5px 15px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileHover={{
        scale: 1.05,
        rotateX: -5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="max-w-5xl -mt-8 mx-auto w-full rounded-[30px] shadow-lg border-4 border-gray-800 group/card hover:shadow-2xl hover:shadow-black/[0.1] transition-all duration-300"
    >
      <div className="h-auto w-full rounded-[26px] overflow-hidden flex items-center justify-center relative">
        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full"
        >
          <Image
            src="/hero-banner.png"
            alt="Hero banner showing automation workflow"
            className="object-cover w-full h-full transform-gpu"
            width={2560}
            height={1440}
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 2560px"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
