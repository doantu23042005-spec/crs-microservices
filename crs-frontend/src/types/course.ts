import axiosClient from './axiosClient';
import type { Course, PagedResponse } from '../types/course';

export const getCourses = (keyword?: string, page = 0, size = 10) => {
    const params: Record<string, any> = { page, size };

    // Chỉ gửi keyword lên backend khi người dùng thực sự nhập chữ
    if (keyword && keyword.trim() !== '') {
        params.keyword = keyword.trim();
    }

    return axiosClient.get<PagedResponse<Course>>('/api/courses', { params });
};