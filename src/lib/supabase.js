import { createClient } from '@supabase/supabase-js';

// هنا استخدم الـ URL و الـ API Key التي حصلت عليها من Supabase
const supabaseUrl = 'https://exjnyddgbqujtkkfxgcu.supabase.co';  // قم بتعديل الرابط حسب ما تحصل عليه
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4am55ZGRnYnF1anRra2Z4Z2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2OTc0NjIsImV4cCI6MjA1MzI3MzQ2Mn0.k7YaQu5lGrHGw3hlYzlj4HxSTVjLzNu_dI_Q9qJ0tOw';  // الـ API Key الخاصة بك

// إنشاء العميل لتتصل بـ Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);