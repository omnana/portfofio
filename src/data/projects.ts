// 项目数据类型定义
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  videoUrl?: string;
  webglUrl?: string;
  itchIoUrl?: string;
  featured: boolean;
  category: 'game' | 'web' | 'mobile' | 'other';
  year: number;
}

// 示例项目数据
export const projects: Project[] = [
  // 这里将根据 doc 文件夹中的 HTML 文件添加实际项目数据
];

// 技能数据
export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'language' | 'framework' | 'tool' | 'engine';
}

export const skills: Skill[] = [
  // 这里将添加技能数据
];
