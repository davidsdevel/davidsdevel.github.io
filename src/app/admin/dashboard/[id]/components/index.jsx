'use client'

import Button from '@/components/button';
import Input from '@/components/input';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { updatePost } from '../actions';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ImagesModal from './modal';
import ImageList from './imageLiist';

const CustomEditor = dynamic( () => import( './editor' ), { ssr: false, loading: () => <div>Loading...</div> } );

export default function EditorPage({post}) {
    const [content, setContent] = useState(post.content || '');
    const [title, setTitle] = useState(post.title || '');
    const [description, setDescription] = useState(post.description || '');
    const [images, setImages] = useState(post.images);
    const [slug, setSlug] = useState(post.slug || '');
    const [thumbnail, setThumbnail] = useState(post.thumbnail || '');

	const [editorRef, setEditorRef] = useState(null);
	const [showImages, setShowImages] = useState(false);

    const {id} = useParams()

    async function updatePostHandler(status) {
        const messages = status === 'PUBLISHED'
            ? {
                pending: 'Publicando...',
                success: 'Post publicado correctamente',
                error: 'Error al publicar el post'
            }
            : {
                pending: 'Guardando...',
                success: 'Post guardado correctamente',
                error: 'Error al guardar el post'
            }

        toast.promise(
            () => updatePost(id, {
                status,
                title,
                slug,
                description,
                content,
                thumbnail,
                images
            }),
            messages
          )
    }

    return <div className='grid grid-cols-3 gap-4 p-8'>
        <div className='col-span-2'>
            <CustomEditor
                content={content}
                onChange={(content) => setContent(content)}
                onLoad={setEditorRef}
				onChangeModalState={setShowImages}
            />
        </div>
        <div className='bg-white rounded-lg p-4 col-span-1'>
            <Input label={'title'} value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Input label={'slug'} value={slug} onChange={(e) => setSlug(e.target.value)}/>
            <Input type={'textarea'} label={'description'} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <ImageList
                images={images}
                thumbnail={thumbnail}
                setThumbnail={setThumbnail}
            />
            <div className='grid grid-cols-2 gap-2 mt-8'>
                <Button onClick={() => updatePostHandler('PUBLISHED')} className='bg-accent-1'>
                    {
                        post.status === 'PUBLISHED'
                            ? 'Actualizar entrada'
                            : 'Publicar entrada'
                    }
                </Button>
                <Button onClick={() => updatePostHandler('DRAFTED')} className='bg-gray-300'>
                    {
                        post.status === 'PUBLISHED'
                            ? 'Convertir borrador'
                            : 'Guardar'
                    }
                </Button>
            </div>
        </div>
        <ImagesModal
			show={showImages}
			onClose={() => setShowImages(false)}
			editor={editorRef}
            onAddImage={
                image => {
                    setImages(prev => {
                        return [
                            ...prev,
                            image
                        ]
                    })
                }
            }
		/>
    </div>
}
